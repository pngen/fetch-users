let dataUrl = "/real-user-data.json";
ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(Users, { "data-url": dataUrl })
), document.getElementById("content"));
// Entry point for index.html; note URL top link
// <Content> and <Logger> components still work