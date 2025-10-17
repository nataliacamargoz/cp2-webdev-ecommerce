import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import SectionContainer from "../components/SectionContainer";

export default function Home() {
  const [eletroRepos, seteletroRepos] = useState([]);
  const [roupaRepos, setroupaRepos] = useState([]);
  const [joiasRepos, setjoiasRepos] = useState([]);
  
  const API = import.meta.env.VITE_GITHUB_API;

  useEffect(() => {
fetch(`${API}electronics`)
.then(res => res.json())
.then(data => seteletroRepos(data))

fetch(`${API}men's clothing`)
.then(res => res.json())
.then(data => setroupaRepos(data))

fetch(`${API}jewelery`)
.then(res => res.json())
.then(data => setjoiasRepos(data))
}, [])


return (<>
  <SectionContainer title="Eletronicos">
        
        {eletroRepos.map(repo => (
          <RepoCard
            key={repo.id} // Identificador único de cada card para o React
            {...repo}></RepoCard>
          
        ))}
        
      </SectionContainer>
     
     <SectionContainer title="Roupas">
        
        {roupaRepos.map(repo => (
          <RepoCard
            key={repo.id} // Identificador único de cada card para o React
            {...repo}
          />
        ))}
        
      </SectionContainer>

      <SectionContainer title="Joias">
        
        {roupaRepos.map(repo => (
          <RepoCard
            key={repo.id} // Identificador único de cada card para o React
            {...repo}
          />
        ))}
        
      </SectionContainer>
   </>
  );
}

