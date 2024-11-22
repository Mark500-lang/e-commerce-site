import { Table, TableContainer, TableBody, TableRow, TableCell } from "@mui/material";
import React from "react";

function ProductDescription({data}){
    
    return(
        <div>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bolder'}}>SKU</TableCell>
                            <TableCell>{data.product_details.sku}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bolder'}}>Product Name</TableCell>
                            <TableCell>{data.name}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bolder'}}>Condition</TableCell>
                            <TableCell>New</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bolder'}}>Make</TableCell>
                            <TableCell>{data.product_details.manufacture}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bolder'}}>Applicable Vehicles</TableCell>
                            <TableCell>{data.product_details.applicable_vehicles}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bolder'}}>Price</TableCell>
                            <TableCell>{data.price}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductDescription;