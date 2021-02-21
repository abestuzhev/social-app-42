import React from "react";

const statusCollection = [
  "Каждый человек имеет право «тупить», но по-моему Вы злоупотребляете!",
  "Я на 30 дне диеты. Всё что я потеряла – это тридцать дней.",
  "Я все время хочу потерять вес, но он «гад» всё время меня находит! ",
  "Больше не верю в любовь. Готов к браку",
  "Первое лезвие приподнимает волосы, второе бреет, а третье и 4 смеются, потому что вы заплатили за это 13 €."
];   
const generateStatus = (statusArr) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return statusArr[getRandomInt(statusArr.length)]
}

export class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status ? this.props.status : generateStatus(statusCollection)
  };

  activateEditMode(){
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode(){
    this.setState({
      editMode: false
    })
  }

  changeStatusText(e){
    this.setState({
      status: e.target.value
    })
  }

  render(){
    return (
      <div className="c-user-info__text c-user-info__status">

        {
          this.state.editMode
            ? <input autoFocus={true} onChange={this.changeStatusText.bind(this)} onBlur={this.deactivateEditMode.bind(this)} className="c-input" type="text" value={this.state.status}/>
            : <span onClick={this.activateEditMode.bind(this)}>{this.state.status}</span>
        }

      </div>
    )
  }

}