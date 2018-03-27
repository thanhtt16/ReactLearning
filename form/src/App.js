import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'thanhtt',
      password: '123456',
      description: 'Mô tả',
      gender: 0,
      lang: 'en',
      status: true
    }
    this.onHandleChange = this
      .onHandleChange
      .bind(this);
    this.onHandleSubmit = this
      .onHandleSubmit
      .bind(this);
  }
  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({[name]: value})
  }
  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">

                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.onHandleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onHandleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Mô tả</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="3"
                      value={this.state.description}
                      onChange={this.onHandleChange}></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Giới tính</label>
                    <select
                      name="gender"
                      className="form-control"
                      value={this.state.gender}
                      onChange={this.onHandleChange}>
                      <option value={0}>Nữ</option>
                      <option value={1}>Nam</option>
                    </select>
                  </div>
                  <br/>

                  <div className="form-group">
                    <label htmlFor="">Ngôn ngữ</label>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="lang"
                          value="en"
                          onChange={this.onHandleChange}
                          checked={this.state.lang === 'en'}/>Tiếng anh
                      </label>
                      <br/>
                      <label>
                        <input
                          type="radio"
                          name="lang"
                          value="vi"
                          onChange={this.onHandleChange}
                          checked={this.state.lang === 'vi'}/>Tiếng việt
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="checkbox">
                      <label>
                        <input
                          name='status'
                          type="checkbox"
                          value={true}
                          checked={this.state.status}
                          onChange={this.onHandleChange}/>
                        Trạng thái
                      </label>
                    </div>

                  </div>

                  <button type="submit" className="btn btn-primary">Lưu lại</button>
                  <button type="reset" className="btn btn-danger">Xóa trắng</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
