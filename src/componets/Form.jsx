import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FormBussinees = async (e) => {
    e.preventDefault();

    try {
        // await axios.post(
        // "http://localhost:5000/login",
        // {
        //     email: email,
        //     password: password,
        // },
        // {
        //     withCredentials: true,
        // }
        // );
        // history("/profile");
    } catch (error) {
        console.log(error);
        if (error.response) {
        // setMsg(error.response.data.errors);
        }
    }
};
const Form = () => {
  const [password, setPassword] = useState("");

    return (
        <form onSubmit={FormBussinees}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Images</label>
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">phone</label>
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Address1</label>
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Address2</label>
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Address3</label>
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">City</label>
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Zip Code</label>
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Country</label>
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">State</label>
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form

// const styles = StyleSheet.create({})