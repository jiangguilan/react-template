import React from 'react';
import './AppHeader.css';
export default function AppHeader(props) {
  return (
    <div className="app-header">{props.name}</div>
  );
}