import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Team from '../Team/Team';

const Teams = () => {
     const [teams, setTeams] = useState([]);

     useEffect(() => {
          fetch('./Teams.JSON')
               .then(res => res.json())
               .then(data => setTeams(data))
     }, []);


     return (

          <div className="container  text-center mt-5 ">
               <CardGroup className="mt-5">
                    <Row xs={1} md={4} className="g-4">
                         {
                              teams.map(team => <Team team={team} key={team.name}></Team>)
                         }
                    </Row>
               </CardGroup>
          </div>

     );
};

export default Teams;