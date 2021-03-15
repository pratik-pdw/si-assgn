import React from 'react'
import axios from 'axios'
import Playerlist from './components/Playerlist.component'
import Searchbar from './components/Searchbar.component'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { playerList: [], searchValue: '', loadingSpinner: false }
  }

  componentDidMount() {
    this.setState({ loadingSpinner: true })
    axios.get('https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e').then(res => {

      const sortedData = res.data.playerList.sort((a, b) => {
        const aValue = parseFloat(a.Value);
        const bValue = parseFloat(b.Value);
        return aValue > bValue ? 1 : -1;
      })

      // console.log(sortedData)
      this.setState({ playerList: sortedData, loadingSpinner: false })
    })
  }

  filterPlayers = (value) => {
    this.setState({ searchValue: value })
  }

  render() {

    const filteredPlayers = this.state.playerList.filter((player) => {
      const searchValue = this.state.searchValue;
      return player.TName.toLowerCase().includes(searchValue.toLowerCase()) || player.PFName.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
      <div>
        <Searchbar filterPlayers={this.filterPlayers} />
        {this.state.loadingSpinner &&
          <Grid style={{ marginTop: '2rem' }} container alignItems="center" justify="center">
            <CircularProgress />
          </Grid>
        }
        <Playerlist playerList={filteredPlayers} />
      </div>)
  }
}

export default App;