import { useEffect, useState } from "react"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useContext } from "react"
import { ProductsContext } from "@/contexts/ProductsContext"

async function getData() {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ]
}

export default function ProductsTable() {
  const [data, setData] = useState([])

  const {products, setProducts} = useContext(ProductsContext)

  useEffect(() => {
    async function loadData() {
      const result = await getData()
      setData(result)
    }
    loadData()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={products} />
    </div>
  )
}