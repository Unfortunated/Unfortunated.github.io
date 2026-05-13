import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import Education from './page/education.tsx'
import Highschool from './page/education/highschool.tsx'
import Bachelor from './page/education/bachelor.tsx'
import Experience from './page/experience.tsx'
import Extracurricular from './page/experience/extracurricular.tsx'
import Employment from './page/experience/employment.tsx'
import Projects from './page/projects.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/education' element={<Education />} />
        <Route path='/education/highschool' element={<Highschool />} />
        <Route path='/education/bachelor' element={<Bachelor />} />
        <Route path='/experience' element={<Experience />} />
        <Route
          path='/experience/extracurricular'
          element={<Extracurricular />}
        />
        <Route path='/experience/employment' element={<Employment />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
