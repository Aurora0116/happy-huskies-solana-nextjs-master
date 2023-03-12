import { Container, Grid } from "@material-ui/core";

export default function SledTrail() {
    return (
        <div className="sled-trail" id="sled-trail">
            <Container>
                <div className="sled-trail-content">
                    <h2>Sled Trail</h2>
                    <p>Coming soon</p>
                    <Grid container spacing={4}>
                        <Grid item xs={6} md={3}>
                            <div className="roadmap-dump">
                                ?
                            </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div className="roadmap-dump">
                                ?
                            </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div className="roadmap-dump">
                                ?
                            </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div className="roadmap-dump">
                                ?
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}