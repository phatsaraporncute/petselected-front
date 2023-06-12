export default function AdminOrder() {
  return (
    <div className="bg-white">
      <div className="w-full h-screen">
        <div className="px-16 py-12">
          <h1 className="border-b border-gray-400 text-3xl font-medium text-graynav pb-3">
            Order
          </h1>

          <div className="overflow-x-auto ">
            <table className="table">
              {/* head */}
              <thead className=" text-graynav pb-3">
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-graynav">
                <tr>
                  <th>1</th>
                  <td>Name Name</td>
                  <td>12/123 xxx Bangkok 11123</td>
                  <td>11/12/23</td>
                  <td>Eversweet Pro x 1</td>
                  <td>4,500 THB</td>
                  <td>
                    <select
                      id="status"
                      name="status"
                      className=" bg-transparent"
                    >
                      <option value="pending">Pending</option>
                      <option value="success">Success</option>
                      <option value="waiting">Waiting</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <th>1</th>
                  <td>Name Name</td>
                  <td>12/123 xxx Bangkok 11123</td>
                  <td>11/12/23</td>
                  <td>Eversweet Pro x 1</td>
                  <td>4,500 THB</td>
                  <td>
                    <select
                      id="status"
                      name="status"
                      className=" bg-transparent"
                    >
                      <option value="volvo">Pending</option>
                      <option value="saab">Success</option>
                      <option value="fiat">Waiting</option>
                      <option value="audi">Completed</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Name Name</td>
                  <td>12/123 xxx Bangkok 11123</td>
                  <td>11/12/23</td>
                  <td>Eversweet Pro x 1</td>
                  <td>4,500 THB</td>
                  <td>
                    <select
                      id="status"
                      name="status"
                      className=" bg-transparent"
                    >
                      <option value="volvo">Pending</option>
                      <option value="saab">Success</option>
                      <option value="fiat">Waiting</option>
                      <option value="audi">Completed</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
