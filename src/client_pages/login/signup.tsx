import React from "react";

export default function SignnUp () {
    return (
        <div className="container py-5">
            <form>
                <fieldset disabled>
                    <legend>Đăng ký</legend>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Name</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Nhập họ tên" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Email</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Nhập số điện thoại hoặc email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">mật khẩu</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Nhập mật khẩu" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Nhập lại mật khẩu</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Nhập lại mật khẩu" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>

        </div>
    )
}