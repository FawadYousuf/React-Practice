
//functional Way
// var HelloWorld = React.createClass({
//   render: function(){
//     return (
//     <h2>Hello World</h2>
//     )
//   }
// });
//Class Way
// class HelloWorld extends React.Component {
//     constructor(props){
//       super(props);

//       this.state = {
//         color : "hotpink"
//       };
//     }

//   toggleColor(){
//     this.setState({
//       color: "yellow"
//     });
//   }
//   render() {

//       const styleObj = { 
//         backgroundColor: "red"
//       };

//     return(
//       <section style={styleObj} id="hello-world">
//     <h2 onClick=(this.toggleColor)> {this.props.name} </h2>
//       </section> 

//     );
//   }
// }
// ReactDOM.render(<HelloWorld name="Fawad"/>, document.getElementById("text"));
// var h1 = React.createElement('h1', null, 'Hello world!')
//       ReactDOM.render(
//         h1,
//         document.getElementById('text')
//       )

// ReactDOM.render(
//   React.DOM.h1(null, "HelloWorld! Create With a Simple React Method with library"),
//   document.getElementById('text')
// )


// var h1 = React.createElement('h1' , null , 'HelloWorld! Create through var keyword Method');
// ReactDOM.render(
// h1,
// document.getElementById('text')
// )

// var customComponent = React.createClass({
//   render: function () {
//     return React.DOM.h1(null, 'HelloWorld! Created By Custom Component ;)');
//   }
// });

// ReactDOM.render(
//   React.createElement(customComponent),
//   document.getElementById('text')
// );

// var divCompo = React.createClass('div', null, )


// var headers = [
//     "Book", "Author", "Language", "Published", "Sales"
// ];
// var data = [
//     ["The Lord of the Rings", "J. R. R. Tolkien",
//         "English", "1954–1955", "150 million"],
//     ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
//         "French", "1943", "140 million"],
//     ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
//         "English", "1997", "107 million"],
//     ["And Then There Were None", "Agatha Christie",
//         "English", "1939", "100 million"],
//     ["Dream of the Red Chamber", "Cao Xueqin",
//         "Chinese", "1754–1791", "100 million"],
//     ["The Hobbit", "J. R. R. Tolkien",
//         "English", "1937", "100 million"],
//     ["She: A History of Adventure", "H. Rider Haggard",
//         "English", "1887", "100 million"],
// ];

// var Excel = React.createClass({
//     render: function () {
//         return (
//             React.DOM.table(null,
//                 React.DOM.thead(null,
//                     React.DOM.tr(null,
//                         this.props.headers.map(function (title, idx) {
//                             return React.DOM.th({ key: idx }, title);
//                         })
//                     )
//                 )
//             )
//         );
//     }
// });

// ReactDOM.render(
//     React.createElement(Excel, {
//         header: headers,
//         initialDats: data,
//     }),
//     document.body
// )
// var Excel = React.createClass({
//     displayName: 'Excel',
//     render: function () {

//     }
// });

// data.map(function (row) {
//     return (
//         React.DOM.tr(null,
//             row.map(function (cell) {
//                 return React.DOM.td(null, cell);
//             })
//         )
//     );
// })

// getInitialState: function() {
//     return { data: this.props.initialData };
// },

// render: function() {
//     return (
//         React.DOM.table(null,
//             React.DOM.thead(null,
//                 React.DOM.tr(null,
//                     this.props.headers.map(function (title, idx) {
//                         return React.DOM.th({ key: idx }, title);
//                     })
//                 )
//             ),
//             React.DOM.tbody(null,
//                 this.state.data.map(function (row, idx) {
//                     return (
//                         React.DOM.tr({ key: idx },
//                             row.map(function (cell, idx) {
//                                 return React.DOM.td({ key: idx }, cell);
//                             })
//                         )
//                     );
//                 })
class HelloWorld extends React.Component {
    render(){
        return (
                <h2>HelloWorld</h2>
    );
  }
}
ReactDOM.render(<HelloWorld />,document.getElementById('text'));