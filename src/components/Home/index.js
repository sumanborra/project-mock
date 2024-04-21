import {Component} from 'react'

import Tabs from '../Tabs'

import MenuItems from '../MenuItems'

import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {dataTabs: [], id: '', items: 0}

  componentDidMount() {
    this.dataFetching()
  }

  dataFetching = async () => {
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const response = await fetch(url)
    const data = await response.json()

    if (response.ok === true) {
      const update = data[0].table_menu_list.map(each => ({
        categoryDishesh: each.category_dishes.map(eachDish => ({
          addonCat: eachDish.addonCat,
          dishAvailability: eachDish.dish_Availability,
          dishCalories: eachDish.dish_calories,
          dishCurrency: eachDish.dish_currency,
          dishDescription: eachDish.dish_description,
          dishId: eachDish.dish_id,
          dishImage: eachDish.dish_image,
          dishName: eachDish.dish_name,
          dishPrice: eachDish.dish_price,
        })),
        menuCategory: each.menu_category,
        menuCategoryId: each.menu_category_id,
      }))

      this.setState({dataTabs: update, id: update[0].menuCategoryId})
    }
  }

  changeTabId = id => {
    this.setState({id})
  }

  increaseItems = () => {
    this.setState(prevState => ({
      items: prevState.items + 1,
    }))
  }

  decreaseItems = () => {
    const {items} = this.state
    if (items < 1) {
      this.setState({items: 0})
    } else {
      this.setState(prevState => ({
        items: prevState.items - 1,
      }))
    }
  }

  render() {
    const {dataTabs, id, items} = this.state

    const listOfItems = dataTabs.filter(each => each.menuCategoryId === id)
    console.log(listOfItems)
    return (
      <>
        <Header items={items} />
        <div className="home-container">
          <ul className="un-ordered-list-tabs">
            {dataTabs.map(each => (
              <Tabs
                dataTabs={each}
                id={id}
                key={each.menuCategoryId}
                changeTabId={this.changeTabId}
              />
            ))}
          </ul>
          {listOfItems.length > 0 && (
            <ul className="menu-items-list-container">
              {listOfItems[0].categoryDishesh.map(each => (
                <MenuItems
                  listOfItems={each}
                  key={each.dishId}
                  items={items}
                  increaseItems={this.increaseItems}
                  decreaseItems={this.decreaseItems}
                />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}
export default Home
