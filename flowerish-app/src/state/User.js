import {observable, action} from 'mobx';

const styles = {
  fish: {
    width: '5%',
    position: 'absolute',
  }
}

export const user = observable({
  fish: 0,

  //action:
  updateFish() {
    this.fish++;
  },
},
{
  updateFish: action,
});