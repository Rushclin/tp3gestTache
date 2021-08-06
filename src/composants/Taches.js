import React from "react";
import Clock from "./Clock";

class Taches extends React.Component{

    constructor() {
        super();
        this.state = ({
            tacheEnCours : '',
            listeTaches : []
        })
    }

    handleChange = (e) =>{
        this.setState({
            tacheEnCours : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        let tache = this.state.listeTaches.slice();
        tache.push(this.state.tacheEnCours);
        this.setState({
            listeTaches : tache,
            tacheEnCours : ''
        })
        console.log(this.state.listeTaches)
    }

    handleClose = (e) =>{
       let tache = this.state.listeTaches.slice();
        tache.splice(e, 1);
        this.setState({
            listeTaches : tache,
            tacheEnCours : ''
        })
    }

    handelSuccess = (e) =>{
        let check = e.target.previousSibling;
        let parentNode = e.target.parentNode
        let editter = e.target.nextSibling;
        console.log(parentNode)

        if (e.target.classList.contains("checked")) {
            e.target.classList.remove("checked")
            check.style.display = "none";
            parentNode.classList.remove("ok")
            editter.style.display = "block"
        }else{
            e.target.classList.add("checked")
            check.style.display = "block";
            parentNode.classList.add("ok")
            editter.style.display = "none"
        }
    }

    handleEdit = (e) =>{
        let tache = this.state.listeTaches.slice();



        console.log(tache[e])
    }

    render() {
        
        let liste = this.state.listeTaches.map((tache, i) =>{
            return(
                <li key={i}>
                    <span className="check" style={{display:"none"}}> 
                        <i className="fa fa-check"></i> 
                    </span> 
                    <span className="ml-3" onClick={this.handelSuccess}>
                        { tache }
                    </span>
                    <span className="editer" style={{display:"block"}} onClick={() => this.handleEdit(i)}>
                        <i className="fa fa-edit"></i>
                    </span>
                    <span className="close" onClick={() => this.handleClose(i)}> 
                        <i className="fa fa-close"></i> 
                    </span>
                </li>
            )
        })
        return (
            <div >
                <div className="row">
                    <div className="col-md-8 text-center ml-auto mr-auto">
                        <h1 className="lead">Mon Gestionnaire de tache</h1>
                        <hr />
                    </div>
                </div>

                <div className="row py-2">
                    <div className="col-md-6 ml-auto mr-auto">
                        <Clock />
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}> 
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <div className="input-group" style={{display:"inlineBlock"}}>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Entrez la nouvelle tache ..."
                                    onChange={this.handleChange} 
                                    value={this.state.tacheEnCours}
                                    required
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-success" type="submit">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="row mt-2">
                    <div className="col-md-6 ml-auto mr-auto shadow rounded">
                        {
                            this.state.listeTaches.length === 0 
                            ?
                                <div>
                                    <p className="py-5 text-center">Vous n'avez pas encore de tache en cours</p>
                                    <h6 className="text-center"><i>Indication : Veuillez cliquer sur le titre de la tache pour la terminer</i></h6> 
                                </div>
                            :
                                <ul className="list-unstyled list-check success py-3">
                                    { liste }
                                </ul>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Taches;