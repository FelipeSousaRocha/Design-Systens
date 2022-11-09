import { Logo } from './components/Logo'
import './styles/global.css'
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100">
      <Logo/>

      <Heading size="lg">Ignite Lab</Heading>

      <Text size="lg" className="text-gray-400">Faca login e comece a usar</Text>
    </div>
  )
}