import React, {Component} from 'react'

import Axios from 'axios'
import {CLIENT_URL} from '../constants.js'
import JobRows from './JobRows'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import './Main.css'

const companyDataFromServer = [{'name': 'Google', 'industry': 'Tech', 'address': 'California', 'url': 'www.google.com', 'glassdoor_link': 'www.google.com', 'jobs': []}, {'name': 'Apple', 'industry': 'Information Technology', 'address': 'Cupertino, CA', 'url': 'https://www.apple.com/', 'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Apple-EI_IE1138.11,16.htm', 'jobs': ['http://localhost:8000/job/9?format=json', 'http://localhost:8000/job/8?format=json']}, {'name': 'Microsoft', 'industry': 'Information Technology', 'address': 'Redmond, WA', 'url': 'https://www.microsoft.com/en-us/', 'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Microsoft-EI_IE1651.11,20.htm', 'jobs': ['http://localhost:8000/job/11?format=json', 'http://localhost:8000/job/10?format=json']}, {'name': 'Apple', 'industry': 'Information Technology', 'address': 'Cupertino, CA', 'url': 'https://www.apple.com/', 'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Apple-EI_IE1138.11,16.htm', 'jobs': ['http://localhost:8000/job/13?format=json', 'http://localhost:8000/job/12?format=json']}, {'name': 'Microsoft', 'industry': 'Information Technology', 'address': 'Redmond, WA', 'url': 'https://www.microsoft.com/en-us/', 'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Microsoft-EI_IE1651.11,20.htm', 'jobs': ['http://localhost:8000/job/15?format=json', 'http://localhost:8000/job/14?format=json']}]

const dataFromServer =
  [{'company':
    {'name': 'Apple',
      'industry': 'Information Technology',
      'address': 'Cupertino, CA',
      'url': 'https://www.apple.com/',
      'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Apple-EI_IE1138.11,16.htm',
      'jobs': ['http://localhost:8000/job/9?format=json', 'http://localhost:8000/job/8?format=json']},
  'title': 'Technical Specialist',
  'description': 'You help new owners get started and current ones get quick, efficient support — developing strong, positive relationships with Apple. ',
  'requirements': 'Ability to assess customers\\’ support needs when they arrive, then provide solutions or refer them to other team members. ',
  'salary_range_start': 36000,
  'salary_range_end': 50000,
  'source': 'glassdoor',
  'notes': 'yes',
  'date_posted': '2018-02-12',
  'todo_list': [{'status': false, 'name': 'Set up app'}],
  'job_status': 'Applied'},
  {'company':
    {'name': 'Apple',
      'industry': 'Information Technology',
      'address': 'Cupertino, CA',
      'url': 'https://www.apple.com/',
      'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Apple-EI_IE1138.11,16.htm',
      'jobs': ['http://localhost:8000/job/9?format=json', 'http://localhost:8000/job/8?format=json']},
  'title': 'Solution Engineer',
  'description': "You're part of a team that helps customers introduce Apple technology within their businesses. ", 
'requirements': 'Extensive experience in mixed-technology environments, including enterprise-level infrastructure. ', 
'salary_range_start': 121000,
 'salary_range_end': 181000,
 'source': 'glassdoor',
 'notes': 'mhm', 
'date_posted': '2018-02-12', 
'todo_list': [{'status': false, 'name': 'Name'}], 
'job_status': 'First Contact'}, {'company': {'name': 'Microsoft', 'industry': 'Information Technology', 'address': 'Redmond, WA', 'url': 'https://www.microsoft.com/en-us/', 'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Microsoft-EI_IE1651.11,20.htm', 'jobs': ['http://localhost:8000/job/11?format=json', 'http://localhost:8000/job/10?format=json']}, 'title': 'Executive Assistant to the Corporate Vice President', 'description': 'You will work with a dynamic and diverse group of people responsible for the company\\’s government affairs outreach in Washington, DC. ', 'requirements': 'Solid project-management and problem-solving skills. ', 'salary_range_start': 56000, 'salary_range_end': 100000, 'source': '', 'notes': 'HOT', 'date_posted': '2018-02-12', 'todo_list': [{'status': false, 'name': 'Test'}], 'job_status': 'Interview'}, {'company': {'name': 'Microsoft', 'industry': 'Information Technology', 'address': 'Redmond, WA', 'url': 'https://www.microsoft.com/en-us/', 'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Microsoft-EI_IE1651.11,20.htm', 'jobs': ['http://localhost:8000/job/11?format=json', 'http://localhost:8000/job/10?format=json']}, 'title': 'Solution Sales Manager- Intelligent Cloud (SLG)', 'description': 'Senior leader within our enterprise sales organization. ', 'requirements': 'Strong experience in leadership and executing on Technology visions preferred', 'salary_range_start': 99000, 'salary_range_end': 180000, 'source': 'glassdoor', 'notes': "master's degree preferred", 'date_posted': '2018-02-12', 'todo_list': [{'status': false, 'name': 'Thing'}], 'job_status': 'Offer'}, {'company': {'name': 'Apple', 'industry': 'Information Technology', 'address': 'Cupertino, CA', 'url': 'https://www.apple.com/', 'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Apple-EI_IE1138.11,16.htm', 'jobs': ['http://localhost:8000/job/13?format=json', 'http://localhost:8000/job/12?format=json']}, 'title': 'Technical Specialist', 'description': 'You help new owners get started and current ones get quick, efficient support — developing strong, positive relationships with Apple. ', 'requirements': 'Ability to assess customers\\’ support needs when they arrive, then provide solutions or refer them to other team members. ', 'salary_range_start': 36000, 'salary_range_end': 50000, 'source': 'glassdoor', 'notes': 'yes', 'date_posted': '2018-02-12', 'todo_list': [{'status': false, 'name': 'Set up app'}], 'job_status': 'Applied'}, {'company': {'name': 'Apple', 'industry': 'Information Technology', 'address': 'Cupertino, CA', 'url': 'https://www.apple.com/', 'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Apple-EI_IE1138.11,16.htm', 'jobs': ['http://localhost:8000/job/13?format=json', 'http://localhost:8000/job/12?format=json']}, 'title': 'Solution Engineer', 'description': "You're part of a team that helps customers introduce Apple technology within their businesses. ", 'requirements': 'Extensive experience in mixed-technology environments, including enterprise-level infrastructure. ', 'salary_range_start': 121000, 'salary_range_end': 181000, 'source': 'glassdoor', 'notes': 'mhm', 'date_posted': '2018-02-12', 'todo_list': [{'status': false, 'name': 'Name'}], 'job_status': 'First Contact'}, {'company': {'name': 'Microsoft', 'industry': 'Information Technology', 'address': 'Redmond, WA', 'url': 'https://www.microsoft.com/en-us/', 'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Microsoft-EI_IE1651.11,20.htm', 'jobs': ['http://localhost:8000/job/15?format=json', 'http://localhost:8000/job/14?format=json']}, 'title': 'Executive Assistant to the Corporate Vice President', 'description': 'You will work with a dynamic and diverse group of people responsible for the company\\’s government affairs outreach in Washington, DC. ', 'requirements': 'Solid project-management and problem-solving skills. ', 'salary_range_start': 56000, 'salary_range_end': 100000, 'source': '', 'notes': 'HOT', 'date_posted': '2018-02-12', 'todo_list': [{'status': false, 'name': 'Test'}], 'job_status': 'Interview'}, {'company': {'name': 'Microsoft', 'industry': 'Information Technology', 'address': 'Redmond, WA', 'url': 'https://www.microsoft.com/en-us/', 'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Microsoft-EI_IE1651.11,20.htm', 'jobs': ['http://localhost:8000/job/15?format=json', 'http://localhost:8000/job/14?format=json']}, 'title': 'Solution Sales Manager- Intelligent Cloud (SLG)', 'description': 'Senior leader within our enterprise sales organization. ', 'requirements': 'Strong experience in leadership and executing on Technology visions preferred', 'salary_range_start': 99000, 'salary_range_end': 180000, 'source': 'glassdoor', 'notes': "master's degree preferred", 'date_posted': '2018-02-12', 'todo_list': [{'status': false, 'name': 'Thing'}], 'job_status': 'Offer'}]

class Main extends Component {
  componentDidMount () {
    Axios.get(`${CLIENT_URL}`)
      .then((response) => {
        this.setState({jobs: response.data})
      })
  }

  render () {
    return (
      <div>
        <Navbar />
        <Sidebar companies={companyDataFromServer} />

        <JobRows filter={'Applied'} jobs={dataFromServer} />
        <JobRows filter={'First Contact'} jobs={dataFromServer} />
        <JobRows filter={'Offer'} jobs={dataFromServer} />
        <JobRows filter={'Rejected'} jobs={dataFromServer} />

      </div>
    )
  }
}

export default Main
