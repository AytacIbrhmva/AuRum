import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import Master from '../../layouts/Master'
import Comment from './components/Comment';
import MoviePart from './components/MoviePart';
import uniqueId from 'lodash/uniqueId'

function Movie() {
  const { id } = useParams();
  const initialProps = {
    movie: {},
    comments: "",
    isLiked: 0,
  };

  const formAddCommentValues = { comment: [] };
  const stateProperties = { selectedSeason: '' };

  const [getMovie, setMovie] = React.useState(initialProps);
  document.title=getMovie.movie.title

  const [getCreateCommentForm, setCreateCommentForm] = React.useState(formAddCommentValues);
  const [getErrors, setErrors] = React.useState(formAddCommentValues);
  const [state, setState] = React.useState(stateProperties)

  const comments = [
    {
      id: 10,
      author: 'A. Ahmadov',
      date: '22.05.2022',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sapiente aperiam maiores a delectus commodi, tempore modi nulla esse qui tenetur ex hic quae, minima ipsam ipsum ducimus recusandae? Neque."
    },
    {
      id: 20,
      author: 'A. Ahmadov',
      date: '22.05.2023',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sapiente aperiam maiores a delectus commodi, tempore modi nulla esse qui tenetur ex hic quae, minima ipsam ipsum ducimus recusandae? Neque."
    },
    {
      id: 30,
      author: 'A. Ahmadov',
      date: '22.05.2024',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sapiente aperiam maiores a delectus commodi, tempore modi nulla esse qui tenetur ex hic quae, minima ipsam ipsum ducimus recusandae? Neque."
    }
  ]


  React.useEffect(() => {
    axios.get('http://localhost:3002/movies').then((e) => {
      const find = e.data.filter((mov, index) => {
        return mov.id === Number(id);
      })


      if (find[0].seasons && find[0].seasons.length > 0) {
        setState({ ...state, 'selectedSeason': find[0].seasons[0].id })
      } else {
        setState({ ...state, 'selectedSeason': ''})
      }

      setMovie({
        ...getMovie,
        movie: find[0],
        comments
      });

    });
    
  }, []) ; // eslint-disable-line react-hooks/exhaustive-deps



  const onChangeHandler = (data) => {
    const { name, value } = data.target;
    setCreateCommentForm({
      [name]: value
    })
  };


  const changeSeasonHandler = (e) => {
    const data_season = e.target.getAttribute('data-id');
    getMovie.movie.seasons.map(season => {
      return season.id === Number(data_season) ? setState({ ...state, selectedSeason: season.id }) : null
    })

  }

  const createComment = (e) => {
    e.preventDefault();
    const currentDate = new Date();

    const newComment = {
      id: uniqueId(),
      author: 'Ahmad Ahmadov',
      date: `${currentDate.getDate()}.0${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`,
      content: getCreateCommentForm.comment
    }
    const result = validate(getCreateCommentForm);

    if (result) {
      setMovie({
        ...getMovie,
        comments: getMovie.comments.concat(newComment)
      })

      setCreateCommentForm(formAddCommentValues)
      e.target.reset()
    }
  }


  const validate = (form) => {
    const errors = {};
    if (Object.keys(form).length > 0) {

      if (!form.comment.length > 0) {
        errors.comment = 'Bu yer boş göndərilə bilməz';
      }
    }
    setErrors(errors)

    if (Object.keys(errors).length) {
      return false
    } else {
      return true;
    }
  }

  const movieReaction = (method) => {
    setMovie({
      ...getMovie,
      isLiked: method,
    });
  }

  if (getMovie.movie) {
    return (
      <Master>
        {
          <section className="section mt-4">
            <div className="section-body">
            <div className="sectionTitle">
                  <div className="d-flex">
                    <h1 className='font-bold'>{getMovie.movie.title}</h1>
                    <div className="actions">
                      {
                        getMovie.isLiked && Number(getMovie.isLiked) === 1
                          ?
                          <button className='btn favBtn active mt-2' onClick={movieReaction.bind(this, false)}><i className="fa-regular fa-heart"></i></button>
                          :
                          <button className='btn favBtn mt-2' onClick={movieReaction.bind(this, true)}><i className="fa-regular fa-heart"></i></button>
                      }
                    </div>
                  </div>

                  <div className='text-muted movieMeta'>
                    <span>Kategoriya: Aksiyon</span>
                    <span> | </span>
                    <span>IMDB: {getMovie.movie.rating}/10</span>
                    <span> | </span>
                    <span>Çəkilmə ili: 2002</span>

                  </div>
                </div>
                <div className="movieContent">
                  <div className="d-flex">
                    <div className="movieImage">
                      <img src={getMovie.movie.src} alt="" />
                    </div>
                    <div className="movieDescription p-3 pt-0">
                      <p className='text-muted'>
                        LThe MCU introduces the character America Chavez and reintroduces OG Spider-Man director Sam Raimi and his frenetic filmmaking style in the superhero sequel that pits Dr. Stephen Strange against an unexpected enemy whose parental instincts are a threat to humankind. Among the many head-scratching moments is brief glimpse at a beloved franchise character who proves that he, at key moments, might not be the smartest man in the universe.
                        <br /> The MCU introduces the character America Chavez and reintroduces OG Spider-Man director Sam Raimi and his frenetic filmmaking style in the superhero sequel that pits Dr. Stephen Strange against an unexpected enemy whose parental instincts are a threat to humankind. Among the many head-scratching moments is brief glimpse at a beloved franchise character who proves that he, at key moments, might not be the smartest man in the universe.
                      </p>
                    </div>
                  </div>

                  <div className="partsSide side-padding">
                    <h3 className='inside-title'>BÖLÜMLƏR</h3>
                    <div className="seasons mb-3">
                      {
                        getMovie.movie.seasons ?
                          getMovie.movie.seasons.map(season => {
                            return <button onClick={changeSeasonHandler} className={`btn ${season.id === Number(state.selectedSeason) ? 'btn-dark' : 'btn-outline-dark'} rounded me-2`} key={season.id} data-id={season.id}>{season.title}</button>
                          })
                          : null
                      }
                    </div>
                    <div className="row">
                      {
                        getMovie.movie.seasons ?
                          getMovie.movie.seasons.map((season, index) => {
                            return season.id === state.selectedSeason ?
                              season.parts.map(part => {
                                return <MoviePart
                                  id={part.id}
                                  key={part.id}
                                  src={getMovie.movie.src}
                                  title={`${part.title} . Bölüm`}
                                  publishedAt="21.05.2022"
                                />
                              })
                              : null
                          })
                          : null
                      }
                    </div>
                  </div>
                  <div className="commentSide side-padding">
                    <h3 className='inside-title'>ŞƏRHLƏR</h3>
                    <div className="addComment">
                      <form onSubmit={createComment}>
                        <textarea className={`mb-0  ${getErrors.comment && getErrors.comment.length > 0 ? 'error' : ''} `} name="comment" cols="30" onChange={onChangeHandler} value={setCreateCommentForm.comment_input} rows="10"></textarea>
                        <p className='text-danger'>{getErrors.comment}</p>

                        <button className='btn btn-outline-dark'>Göndər</button>
                      </form>
                    </div>
                    {
                      getMovie.comments ?
                        getMovie.comments.sort((a, b) => {
                          return b.id - a.id
                        }).map(comment => {
                          return <Comment
                            key={comment.id}
                            id={comment.id}
                            author={comment.author}
                            date={comment.date}
                            comment={comment.content}
                          />
                        })
                        : null
                    }
                  </div>
              </div>
            </div>
          </section>
        }
      </Master>
    )
  }
}

export default Movie