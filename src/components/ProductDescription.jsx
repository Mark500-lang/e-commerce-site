import { Table, TableContainer, TableBody, TableRow, TableCell } from "@mui/material";
import React from "react";

function ProductDescription({data}){
    
    return(
        <div>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>SKU</TableCell>
                            <TableCell>{data.product_details.sku}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>{data.name}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Condition</TableCell>
                            <TableCell>New</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Make</TableCell>
                            <TableCell>{data.product_details.manufacture}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Applicable Vehicles</TableCell>
                            <TableCell>{data.product_details.applicable_vehicles}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Price</TableCell>
                            <TableCell>{data.price}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductDescription;