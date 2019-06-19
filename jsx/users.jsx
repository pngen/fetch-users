class Users extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			users: []
		}
	}
	componentDidMount() {
		fetch(this.props["data-url"])
			.then(response => response.json())
			.then(users => this.setState({ users: users }))
	}
	render() {
		return (
			<div className="container">
				<h1>List of Users</h1>
				<table className="table-striped table-condensed table table-bordered table-hover">
					<tbody>
						{this.state.users.map(user => {
							// for each user, not users
							return (
								<tr key={user.id}>
									<td>ID_{user.id}</td>
									<td>
										{user.first_name} {user.last_name}
									</td>
									<td>{user.gender}</td>
									<td>{user.email}</td>
									<td>{user.ip_address}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}
