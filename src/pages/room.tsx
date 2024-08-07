import { useParams } from "react-router-dom"
import amalogo from '../assets/ama-logo.svg'
import { ArrowRight, ArrowUp, Share2 } from "lucide-react"
import { toast} from 'sonner'

export function Room(){
  const { roomId } = useParams()

  function handleShareRoom(){
    const url = window.location.href.toString()

    if (navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url })
    }else {
      navigator.clipboard.writeText(url)

      toast.info('The room URL was copied to your clipboard')
    }
    
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amalogo} alt="Ama logo" className="h-5"/>

        <span className="text-sm text-zinc-500 truncate">
          Codigo da sala: <span className="text-zinc-300">{roomId}</span>
        </span>

        <button 
        onClick={handleShareRoom}
        type="submit" 
        className=' ml-auto bg-orange-800 text-zyn-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-zync-700'>
          Compartilhar
        
          <Share2 className='size-4' />
        </button>
      </div>

      <div className="h-px w-full bg-zinc 900">
      </div>


      <form 
      className='flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-off-2 ring-offset-zinc-950 focus-within:ring-1'>
        <input
          type='text'
          name= 'theme'
          placeholder='Qual a sua pergunta?'
          autoComplete='off'
          className='flex-1 text-sm mx-2 bg-transparent outline-none placeholder:text-zinc-500 text-zinc-100'
        />

        <button type="submit" className=' bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500'>
          Criar pergunta 
          <ArrowRight className='size-4' />
        </button>
      </form>

      <ol className="list-decimal list-outside px-3 space-y-8 ">
        <li className="ml-4 leading-relaxed text-zinc-100">
          O que é Golang e quais são as suas principais vantagens?

          <button type="button" className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500">
            <ArrowUp className="size-4" />
            Curtir pergunta(123)
          </button>
        </li>
        <li className="ml-4 leading-relaxed text-zinc-100">
          O que é Golang e quais são as suas principais vantagens?
          <button type="button" className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300">
            <ArrowUp className="size-4" />
            Curtir pergunta(123)
          </button>
        </li>
      </ol>
    </div>
  )
}