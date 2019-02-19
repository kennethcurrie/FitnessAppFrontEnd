import React from 'react';
import { IChuckNorrisState } from '../../reducers';

interface IChuckNorrisProps {
  clicks: number,
  chuckNorris: IChuckNorrisState,
  buyJoke: () => void
}

export class ChuckNorrisComponent extends React.Component<IChuckNorrisProps, any> {

  render() {
    return (
      <div>
        <div>
          Joke: {this.props.chuckNorris.joke}
        </div>
        {
          this.props.clicks >= 1000 && 
            <button className="btn btn-primary" 
              onClick={() => this.props.buyJoke}
            >
                Buy Joke
            </button>
        }
      </div>
    )
  }

}
