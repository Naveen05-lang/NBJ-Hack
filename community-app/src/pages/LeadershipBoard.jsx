import React, { useEffect } from "react";

function LeadershipBoard() {
    const [leaderboard, setLeaderboard] = useState([]);
    useEffect(() => {
        const fetchLeadershipBoard = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/yoga/leaderboard`);
                console.log(response.data);

                setLeaderboard(response.data);

            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };

        fetchLeadershipBoard();
    },[]);



    return (
        <div>
            <h1>Leadership Board</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>UserName</th>
                        <th>Total Asanas</th>
                        <th>Total Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       {leaderboard.map((leader, index) => (
                        <tr key={leader.userId}>
                            <td>{index + 1}</td>
                            <td>{leader.userId}</td>
                            <td>{leader.totalAsanas}</td>
                            <td>{leader.totalCount}</td>
                        </tr>
                        ))}
                    </tr>   
                    
                </tbody>
            </table>
        </div>
    )
}