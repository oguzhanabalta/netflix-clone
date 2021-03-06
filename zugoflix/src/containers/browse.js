import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import Fuse from "fuse.js";
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from "./footer";
import { Loading, Header, Card, Player } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'

export default function BrowseContainer({ slides }) {
    
    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [slideRows,  setSlideRows] = useState([]);

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    useEffect(()=>{
        setSlideRows(slides[category]);
    }, [slides, category])


    useEffect(()=>{
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre'],

        });
        const results = fuse.search(searchTerm).map(({item})=>item);

        if(slideRows.length>0 &&searchTerm.length>3 && results.length>0 ){
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    },[searchTerm])
    return (
        profile.displayName ? (
            <>
                {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

                <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                        <Header.Group>
                            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                            <Header.TextLink 
                                active={category=== 'series' ? 'true' : 'false'}
                                onClick={()=> setCategory('series')}            
                            >
                                Diziler
                            </Header.TextLink>
                            <Header.TextLink 
                                active={category=== 'films' ? 'true' : 'false'}
                                onClick={()=> setCategory('films')}   
                            >
                                Filmler
                            </Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.Search
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                            />
                            <Header.Profile>
                                <Header.Picture src={user.photoURL} />
                                <Header.Dropdown>
                                    <Header.Group>
                                        <Header.Picture src={user.photoURL} />
                                        <Header.TextLink>{user.displayName}</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink onClick={() => firebase.auth().signOut()}>Oturumu kapat</Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Frame>

                    <Header.Feature>
                        <Header.FeatureCallOut>Joker'i ??imdi ??zle</Header.FeatureCallOut>
                        <Header.Text>
                        Kalabal??????n i??inde sonsuza kadar yaln??z kalan ba??ar??s??z komedyen Arthur Fleck, Gotham City sokaklar??nda y??r??rken ba??lant?? arar. Arthur iki maske tak??yor - bir palya??o olarak g??nl??k i??i i??in boyad?????? maske ve etraf??ndaki d??nyan??n bir par??as?? gibi hissetmek i??in beyhude bir ??abayla yans??tt?????? k??l??k.
                        </Header.Text>
                        <Header.PlayButton>Oynat</Header.PlayButton>
                    </Header.Feature>
                </Header>

                <Card.Group>
                    {slideRows.map((slideItem) =>(
                        <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                            <Card.Title>{slideItem.title}</Card.Title>
                            <Card.Entities>
                                {slideItem.data.map((item)=>(
                                    <Card.Item key={item.docId} item={item}>
                                        <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>
                                ))}
                            </Card.Entities>
                           <Card.Feature category={category}>
                                <Player>
                                    <Player.Button/>
                                    <Player.Video src="/videos/bunny.mp4"/>
                                </Player> 
                            </Card.Feature> 
                        </Card>
                    ))}

                </Card.Group>
                <FooterContainer/>



            </>

        ) : <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}