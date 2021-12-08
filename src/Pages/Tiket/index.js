import axios from "axios";
import React, { useState, useEffect } from "react";

const list = [
  {
    no: 1,
    no_lap: "TS/2/102021/8",
    tgl_lap: "10 Okt 2021",
    jenis: "laporan",
    sub_jenis: "laporan sub",
    petugas: "eko",
    permasalahan: "rusak",
    status: "aktif",
  },
];

const Tiket = () => {
  const [tiket, setTiket] = useState(list);
  useEffect(() => {
    axios
      .get(
        "https://yantek.padipresence.id/api/mastersupport/getdata/sub_type_ticket"
      )
      .then((response) => {
        setTiket(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container md:p-20">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No Laaporan
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tanggal laporan
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Jenis
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Sub Jenis
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      petugas
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Permasalahan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {list.map((tiket) => (
                    <tr>
                      <td>{tiket.no}</td>
                      <td>{tiket.no_lap}</td>
                      <td>{tiket.tgl_lap}</td>
                      <td>{tiket.jenis}</td>
                      <td>{tiket.petugas}</td>
                      <td>{tiket.permasalahan}</td>
                      <td>{tiket.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiket;
