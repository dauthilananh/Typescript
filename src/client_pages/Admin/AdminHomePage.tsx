import React from "react";
import { NavLink } from "react-router-dom";

type Props = {}

export default function AdminHomePage(props: Props) {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h2 className="border-b-4 border-balck-200">Admin</h2>
            <div className="table-responsive">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <main className="px-3">
                        <h1>Đậu Thị Lan Anh</h1>
                        <h3>Mã Sinh viên: PH11760</h3>
                    </main>

                </div>

            </div>
        </main>
    )
}