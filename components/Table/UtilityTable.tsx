import React from 'react'

export  function UtilityTable({
  Capacity, Power, Voltage, RecoveryRate, Dimension, Passiveincome
}: {
  Capacity: React.ReactNode,
  Power: React.ReactNode,
  Voltage: React.ReactNode,
  RecoveryRate: React.ReactNode,
  Dimension: React.ReactNode,
  Passiveincome: React.ReactNode,
}) {

  return <table className=''>
    <tbody>
      <tr>
        <th>Capacity</th>
        <td>{Capacity}</td>

      </tr>
      <tr>
        <th>Power</th>
        <td>{Power}</td>s

      </tr>
      <tr>
        <th>Voltage</th>
        <td>{Voltage}</td>

      </tr>
      <tr>
        <th>Recovery Rate</th>
        <td>{RecoveryRate}</td>

      </tr>
      <tr>
        <th>Dimension</th>
        <td>{Dimension}</td>

      </tr>
      <tr>
        <th>Passive income</th>
        <td>{Passiveincome}</td>

      </tr>
    </tbody>
  </table>;
}
