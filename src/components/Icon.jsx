import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

const Icon = () => {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    position: "relative",
                    bottom: "30px",
                    // zIndex: "1"
                    // bottom: "40px",
                }}
            >
                <Card
                    style={{
                        backgroundColor: "white",
                        height: "10vh",
                        width: "5vw",
                        borderRadius: "10px",
                    }}>
                        <CardContent>
                        </CardContent>
                        <Typography>Car</Typography>
                </Card>
                <Card
                    style={{
                        backgroundColor: "white",
                        height: "10vh",
                        width: "5vw",
                        borderRadius: "10px"
                    }}>
                </Card>
                <Card
                    style={{
                        backgroundColor: "white",
                        height: "10vh",
                        width: "5vw",
                        borderRadius: "10px"
                    }}>
                </Card>
                <Card
                    style={{
                        backgroundColor: "white",
                        height: "10vh",
                        width: "5vw",
                        borderRadius: "10px"
                    }}>
                </Card>
                <Card
                    style={{
                        backgroundColor: "white",
                        height: "10vh",
                        width: "5vw",
                        borderRadius: "10px"
                    }}>
                </Card>
                <Card
                    style={{
                        backgroundColor: "white",
                        height: "10vh",
                        width: "5vw",
                        borderRadius: "10px"
                    }}>
                </Card>
            </div>

        </div>
    )
}

export default Icon
