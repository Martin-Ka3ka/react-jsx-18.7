var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            <div className = {'contactItem'}>
                <img className ={'contactImage'}src = 'http://icons.veryicon.com/png/System/IconTexto%20Webdev/Webdev%20contact.png'></img>
                <p className ={'contactLabel'}>Imię: {this.props.item.firstName}</p>    
                <p className = {'contactLabel'}>Nazwisko: {this.props.item.lastName}</p>       
                <a className = {'contactEmail'} href = {'mail to:' + this.props.item.email}>{this.props.item.email}</a>    
            </div>
        )
    },
});