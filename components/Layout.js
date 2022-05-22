import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';
export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title> EasyMarket</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Easy Market</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer classesName={classes.footer}>
        <Typography>All rights reserve.Subin Infosys</Typography>
      </footer>
    </div>
  );
}
