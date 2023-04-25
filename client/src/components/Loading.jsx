import spinner from './assets/loading.gif'
function Loading() {
  return (
    <div className='spinner-container'>
        <img src={spinner} className='spinner' alt="" />
    </div>
  )
}

export default Loading