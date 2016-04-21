import React from 'react'


const Repos = ({repos}) => {
  return (
    <div>
      <h3>User Repos</h3>
      <ul className="list-group">
        {repos.map((repo, index) => {
          return (
            <li className="list-group-item" key={index} >
              {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a> </h4>} {/*tricky way to make an if statement*/}
              {repo.description && <p> {repo.description} </p>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repos