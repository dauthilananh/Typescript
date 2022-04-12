import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Category() {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h2 className="border-b-4 border-balck-200">Danh mục</h2>
            <div className="table-responsive">
                <table className="table table-dark table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1,001</td>
                            <td>random</td>
                            <td>data</td>
                            <td>placeholder</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>1,002</td>
                            <td>placeholder</td>
                            <td>irrelevant</td>
                            <td>visual</td>
                            <td>layout</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}