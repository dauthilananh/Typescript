import React from "react";

export default function Login () {
    return (
        <div className="container py-5">
            <form>
                <fieldset disabled>
                    <legend>Đăng nhập</legend>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Email</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="số điện thoại hoặc email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">mật khẩu</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="mật khẩu" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>

        </div>
    )
}