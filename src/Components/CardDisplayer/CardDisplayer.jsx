/* eslint no-eval: 0 */
import React, { useState } from "react";
import CardDisplayWrapper from "./CardDisplayWrapper";
import Paper from '@material-ui/core/Paper';
import { Rating } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
// import StarIcon from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';

function CardDisplay({ bookListImport, currentIndex, setCurrentIndex, ...rest }) {
    // function addreview(review){

    // }
    const { t } = useTranslation();
    let bookList = bookListImport;
    var str = 'bookList[currentIndex].' + t('About.1');

    // function handleClick(lang) {
    //     i18next.changeLanguage(lang)
    // }

    // const [currentIndex, setCurrentIndex] = useState[0];
    function addReview() {
        // var reviewText = document.getElementById("personReview").target.value;
        // var rating = value;
        // var name = document.getElementById("name").target.value;
        // console.log(reviewText, " ", rating," ", name);
        // console.log(rating, name, reviewText);
        console.log(rating, reviewerName, review);
        // var completeRev = {rating: rating, name:reviewerName, review:review};
        alert(t('Card.2')+": "+reviewerName+"\n"+t('Card.3')+": "+rating+"\n"+t('Card.6')+": "+review+"\nReview submitted! Thank you");
        setRating(0);
        setReview('');
        setReviewerName('');
    }
    const [rating, setRating] = useState(1);
    const [reviewerName, setReviewerName] = useState(" ");
    const [review, setReview] = useState(" ");
    const StyledRating = withStyles({
        iconEmpty: {
            color: '#9E9E9E',
        },
    })(Rating);
    return (
        <CardDisplayWrapper>
            <Paper className="cardContainer" elevation="0">
                {/* <div className="cardContainer"> */}
                <Paper className="statsAndImage" elevation="6">
                    <div className="imageContainer">
                        <img src={bookList[currentIndex].img} alt="Book Cover" className="coverImage" />
                    </div>
                    <div className="statsBook">
                        <p className="stats author">{t('Card.9')}: {bookList[currentIndex].author}</p>
                        <p className="stats pages">{t('Card.10')}: {bookList[currentIndex].pages}</p>
                        <p className="stats year">{t('Card.11')}: {bookList[currentIndex].yearPublished}</p>
                        <p className="stats genre">{t('Card.12')}: {bookList[currentIndex].genre}</p>
                    </div>
                </Paper>
                <div className="bookInformation">
                    <h1>{bookList[currentIndex].name}</h1>
                    <p>{eval(str.toString())}</p>
                    {/* <p>{bookList[currentIndex].this[t('About.1')]}</p> */}
                    
                    {/* <p>{t('Home.1')}</p> */}
                </div>
                <Paper className="reviewSection" elevation="3">
                    <div className="reviewRead">
                        <div className="rating">
                            <h2>{t('Card.1')}({bookList[currentIndex].ratings.length})</h2>
                            <StyledRating
                                precision='0.25'
                                size="small"
                                name="read-only"
                                value={bookList[currentIndex].ratings.reduce((a, b) => (a + b)) / bookList[currentIndex].ratings.length} readOnly className="starsTop"
                            />
                        </div>
                        <div className="reviews">
                            {bookList[currentIndex].reviews.map((_, idx) => {
                                return (
                                    <div className="reviewUnit" key={idx}>
                                        <i><div className="header">
                                            <section><b>{t('Card.2')}: </b>{bookList[currentIndex].reviews[idx].name}</section>
                                            <section>
                                                <b>{t('Card.3')}:</b>
                                                <StyledRating
                                                    size="small"
                                                    precision='0.25'
                                                    name="read-only"
                                                    value={bookList[currentIndex].reviews[idx].rating} readOnly className="starsReview"
                                                />
                                            </section>
                                        </div>
                                            <div className="text">
                                                {bookList[currentIndex].reviews[idx].review}
                                            </div></i><br />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="reviewAdd">
                        <h2>{t('Card.4')}!</h2>
                        <form className="reviewForm" >
                            {/* <input className="reviewInput" maxLength="20" placeholder="Name (Max 20 Chars)" id="name" /> */}
                            <StyledRating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event) => setRating(event.target.value)}
                                className="starsAdding"
                                id="filled-required"
                            />
                            <TextField
                                required
                                id="filled-required"
                                label={t('Card.2')}
                                value={reviewerName}
                                variant="outlined"
                                placeholder={t('Card.5')}
                                className="reviewInput"
                                inputProps={{ maxLength: 20 }}
                                onChange={(event) => setReviewerName(event.target.value)}
                                helperText={t('Card.5')}
                            // onChange={(event, newValue) => {
                            //     setReviewerName(newValue);
                            // }}
                            />
                            <TextField
                                required
                                id="filled-required"
                                label={t('Card.6')}
                                variant="outlined"
                                value={review}
                                placeholder={t('Card.7')}
                                className="reviewInput"
                                inputProps={{ maxLength: 160 }}
                                helperText={t('Card.7')}
                                onChange={(event) => setReview(event.target.value)}
                            // onChange={(event, newValue) => {
                            //     setReview(newValue);
                            // }}
                            />
                            {/* <input className="reviewInput" maxLength="30" placeholder="Your Review (Max 30 Chars)" id="personReview" /> */}
                            {/* <button type="submit" className="reviewInput submit" >Submit</button> */}
                            <Button
                                id="sid"
                                className="reviewInput"
                                variant="contained"
                                color="secondary"
                                type="submit"
                                onClick={() => addReview()}
                                // className={classes.button}
                                startIcon={<KeyboardArrowUpIcon />}
                            >{t('Card.8')}</Button>
                        </form>
                    </div>
                </Paper>
                {/* </div> */}
            </Paper>
        </CardDisplayWrapper>

    );
}
export default CardDisplay;