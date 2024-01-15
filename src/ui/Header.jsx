import { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

export class Header extends Component {
  render() {
    return (
      <header className='bg-yellow-400 flex items-center justify-between uppercase px-4 border-b border-stone-200 py-3 sm:px-6'>
        <Link className='tracking-widest' to="/">Fast Pizza</Link>

        <SearchOrder />

        <Username />

      </header>
    )
  }
}

export default Header