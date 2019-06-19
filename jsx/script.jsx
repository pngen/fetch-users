let dataUrl = "/real-user-data.json"
ReactDOM.render(
	<div>
		<Users data-url={dataUrl} />
	</div>,
	document.getElementById("content")
)
// Entry point for index.html; note URL top link
// <Content> and <Logger> components still work
