import { ArrowRight } from 'lucide-react'
import amalogo from '../assets/ama-logo.svg'
import { useNavigate } from 'react-router-dom'

export function CreateRoom(){
  const navigate = useNavigate()

  function handleCreateRoom(data: FormData){
    const theme = data.get('theme')?.toString()
    navigate('/room/5645dfdsf5sd4f5')
  }

  return (
    <main className='h-screen flex items-center justify-center px-4'>
      <div className='max-w-[450px] flex flex-col gap-6'>
      <img src={amalogo} alt="Ama logo"  className='h-10'/>
      <p className='leading-relaxed text-zinc-300 text-center'>
        Crie uma sala pública de AMA (Ask Me Anything) e priorize as perguntas mais importantes para a comunidade.
      </p>

      <form 
      action={handleCreateRoom}
      className='flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-off-2 ring-offset-zinc-950 focus-within:ring-1'>
        <input
          type='text'
          name= 'theme'
          placeholder='Nome da sala'
          autoComplete='off'
          className='flex-1 text-sm mx-2 bg-transparent outline-none placeholder:text-zinc-500 text-zinc-100'

        />

        <button type="submit" className=' bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500'>
          Criar sala 
          <ArrowRight className='size-4' />
        </button>
      </form>
    </div>
    </main>
  )
}