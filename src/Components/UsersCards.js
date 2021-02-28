import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./UsersCards.css";
const UsersCards = ({ user, id }) => {
  return (
    <Card className="usersCard">
      <CardContent>User Name: {user.name}</CardContent>
      <CardContent>Address Street: {user.address.street}</CardContent>
      <CardContent> Phone #: {user.phone}</CardContent>
      <CardContent>WebSite: {user.website}</CardContent>
    </Card>
  );
};

export default UsersCards;
