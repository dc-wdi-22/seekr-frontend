import React,{Component} from 'react'

const fakeData = [
  {
    title: "Coder",
    company: "General Assembly",
    location: "Washington DC",
    url: "https://www.google.com",
    closing_date: "May 15, 2018",
    requirements: "N/A",
    salary_range: "50,000-75,000",
    pt_of_contact: "James Superbuggy",
    source: "google.com"
  },
  {
    title: "Specialist",
    company: "Apple",
    location: "Cupertino, CA",
    url: "https://www.apple.com/",
    closing_date: "May 8, 2018",
    requirements: "N/A",
    salary_range: "80,000-100,000",
    pt_of_contact: "Ali Spittel",
    source: "apple.com"
  },
  {
    title: "Coder2",
    company: "GW Bootcamp",
    location: "Washington DC",
    url: "www.gwu.edu",
    closing_date: "May 17, 2018",
    requirements: "N/A",
    salary_range: "600,000-650,000",
    pt_of_contact: "Joy Outcomes",
    source: "www.google.com"
  }
]

class JobRows extends Component {
  constructor () {
    super()
    this.state = {
      fakeData: []
    }
  }
  componentDidMount () {
    // waiting on api work from jason and matt
    this.setState({fakeData: fakeData})

  }
  render(){
    const rows = this.state.fakeData.map( (job,i) => {
      return (
      <div>
        <h3>{job.title}</h3>
        <h3>{job.company}</h3>
        <h3>{job.location}</h3>
        <h3>{job.url}</h3>
        <h3>{job.closing_data}</h3>
        <h3>{job.requirements}</h3>
        <h3>{job.salary_range}</h3>
        <h3>{job.pt_contact}</h3>
        <h3>{job.source}</h3>
      </div>
      )
    })
    return(
      <div>
        <h1>Job Component</h1>
        { rows }
      </div>
    )
  }
}

export default JobRows
