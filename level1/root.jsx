function Top(){
    return (
        <div id = 'navbar'>
            <p id = 'navbarTitle'>Newsfeed</p>
            <p>Check what your friends have been up to</p>
        </div>
    )
}

function Middle(){

    var newestMembersList = [
        {'id': 1, 'profileImg': 'image/profilePicture1.jpg', 'name': 'Sandra Strange', 'tag': '@sanstrange', 'bluetick': 1},
        {'id': 2, 'profileImg': 'image/profilePicture2.jpg', 'name': 'Rosie Sakura', 'tag': '@sakuroro', 'bluetick': 0}, 
        {'id': 3, 'profileImg': 'image/profilePicture3.jpg', 'name': 'Damian Greyson', 'tag': '@dgreyson', 'bluetick': 0}, 
        {'id': 4, 'profileImg': 'image/profilePicture4.jpg', 'name': 'The Green Goo', 'tag': '@greengoo', 'bluetick': 0}, 
        {'id': 5, 'profileImg': 'image/profilePicture5.jpg', 'name': 'Bearded Wonder', 'tag': '@brdwonder', 'bluetick': 0}, 
    ]

    var questsList = [
        {'id': 1, 'profileImg': 'image/profilePicture1.jpg', 'name': 'Posting Machine', 'info': 'Posted more than 20 profile activities in on eday'},
    ]

    var popularGroupsList = [
        {'id': 1, 'profileImg': 'image/profilePicture1.jpg', 'name': 'Street Artists', 'members': '4 members', 'textImg': 'image/earthImg.jpg'},
        {'id': 2, 'profileImg': 'image/profilePicture2.jpg', 'name': 'Cosplayers of the World', 'members': '3 members', 'textImg': 'image/earthImg.jpg'}, 
        {'id': 3, 'profileImg': 'image/profilePicture3.jpg', 'name': 'Stream Designers', 'members': '3 members', 'textImg': 'image/earthImg.jpg'}, 
        {'id': 4, 'profileImg': 'image/profilePicture4.jpg', 'name': 'Gaming Watchtower', 'members': '3 members', 'textImg': 'image/lockImg.png'}, 
        {'id': 5, 'profileImg': 'image/profilePicture5.jpg', 'name': 'Living in Japan', 'members': '2 members', 'textImg': 'image/earthImg.jpg'}, 
    ]

    var bodgesList = [
        {'id': 1, 'profileImg': 'image/profilePicture1.jpg', 'name': 'Globe Trotter', 'info': 'Has joined at least 10 different groups'},
    ]

    // TODO: better fetching and sorting logic
    var tweetList = [
        {
            'id': 1, 
            'profileImg': 'image/profilePicture1.jpg', 
            'author': 'Marina Valentine', 
            'bluetick': 1, 
            'member': 'Pro member',
            'action': {'action': 'replied to the topic', 'topic': 'Welcome to the Cosplayers Group Forum!', 'forum': 'Cosplayers Group Forum'},
            'post_date': '1 year ago', 
            'content': {'text': 'Hello Everyone!', 'link': '', 'picture': ''},
            'emoji': {'type': [String.fromCodePoint(128518)], 'amount': [1]},
            'comment': {'amount': 0, 'text': [''], 'emoji': [{'type':[], 'amount': []}]}, 
            'share': 0
        }, 
        {
            'id': 2, 
            'profileImg': 'image/profilePicture1.jpg', 
            'author': 'Marina Valentine', 
            'bluetick': 1,
            'member': 'Pro member',
            'action': {'action': 'posted an update', 'topic': '', 'forum': ''},
            'post_date': '2 year ago', 
            'content': {'text': '', 'link': 'https://www.twitch.tv/blazzard', 'picture': 'image/tweetPicture.webp'},
            'emoji': {'type': [String.fromCodePoint(0x1F602)], 'amount': [3]},
            'comment': {'amount': 0, 'text': [''], 'emoji': [{'type':[], 'amount': []}]}, 
            'share': 0
        },
    ]

    // dropdown menu function
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState("Everything");

    const dropDownMenuDropDownClick = () => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    };

    const dropDownMenuOptionClick = (optionValue) => {
        setSelectedOption(optionValue);
        setIsOpen(false);
    };

    
    return (
        <div>

            <div id = 'leftContainer'>

                {/* newest Members */}
                <div id = 'newestMembersContainer'>
                    <p id = 'newestMembersTitle'><b>Newest Members</b></p>

                    {newestMembersList.map((item) => (
                        <div key={item.id} className = 'newestMembersName'>
                            <div className = 'newestMembersProfileContainer'>
                                <img src={item.profileImg} alt={'Image (item.id)'} className = 'newestMembersProfile'></img>
                            </div>
                            <div class = 'newestMembersTextContainer'>
                                <p class = 'newestMembersText'><b>{item.name}</b></p>
                                <p class = 'newestMembersTag'>{item.tag}</p>
                            </div>
                            <div class = 'newestMembersBlueTick'>
                                {item.bluetick === 1 && (
                                        <img src = 'image/bluetick.png' alt = 'blue tick' className = 'bluetick'></img>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Quests */}
                <div id = 'questsContainer'>
                    <p id = 'questsTitle'><b>Quests</b></p>

                    {questsList.map((item) => (
                        <div key={item.id} className = 'questsName'>
                            <div className = 'questsProfileContainer'>
                                <img src={item.profileImg} alt={'Image (item.id)'} className = 'questsProfile'></img>
                            </div>
                            <div class = 'questsTextContainer'>
                                <p class = 'questsText'><b>{item.name}</b></p>
                                <p class = 'questsInfo'>{item.info}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div id = 'middleContainer'>

                {/* title */}
                <div id="titleContainer">
                    <div id="titleTextContainer">
                        <span id="titleText">All Updates</span>
                    </div>

                    {/* dropdown menu */}
                    <div id="middleDropDownContainer">
                        <div id="middleDropDownLabelContainer">
                            <label id="middleDropDownLabel">Show</label>
                        </div>
                        <div id="middleDropDownSelect" onClick={dropDownMenuDropDownClick}>
                            <span id="middleDropDownOption">{selectedOption}</span>

                            {/* show dropdown if button is clicked */}
                            {isOpen && (
                            <ul id="middleDropDownList">
                                {selectedOption === "Everything" ? (
                                    <>
                                    <li onClick={(e) => dropDownMenuOptionClick(e.target.getAttribute("value"))} value="Option 2">
                                        Option 2
                                    </li>
                                    <li onClick={(e) => dropDownMenuOptionClick(e.target.getAttribute("value"))} value="Option 3">
                                        Option 3
                                    </li>
                                    </>
                                ) : selectedOption === "Option 2" ? (
                                    <>
                                    <li onClick={(e) => dropDownMenuOptionClick(e.target.getAttribute("value"))} value="Everything">
                                        Everything
                                    </li>
                                    <li onClick={(e) => dropDownMenuOptionClick(e.target.getAttribute("value"))} value="Option 3">
                                        Option 3
                                    </li>
                                    </>
                                ) : selectedOption === "Option 3" ? (
                                    <>
                                    <li onClick={(e) => dropDownMenuOptionClick(e.target.getAttribute("value"))} value="Everything">
                                        Everything
                                    </li>
                                    <li onClick={(e) => dropDownMenuOptionClick(e.target.getAttribute("value"))} value="Option 2">
                                        Option 2
                                    </li>
                                    </>
                                ) : null}
                            </ul>
                            )}
                            
                        </div>
                    </div>
                </div>

                {/* tweet */}
                <div id = 'tweetContainer'>
                {tweetList.map((item) => (
                        // a section of tweet
                        <div key={item.id} className = 'tweet'>

                            {/* tweet's header */}
                            <div class = 'tweetTitle'>
                                <div class = 'tweetTitleImgContainer'>
                                    <img src={item.profileImg} class = 'tweetTitleProfileImg'></img>
                                </div>

                                {/* tweet's, author's information */}
                                <div class = 'tweetTitleDescription'>
                                    <div class = 'tweetTitleDescriptionText'>
                                        <span class = 'tweetTitleHighlight'>{item.author}</span>
                                        {item.bluetick === 1 && (
                                            <img src = 'image/bluetick.png' alt = 'blue tick' className = 'tweetBluetick'></img>
                                        )}
                                        {item.member === 'Pro member' && (
                                            <span className = 'tweetMemberText'>Pro member</span>
                                        )}
                                        <span>
                                            {item.action.action}&nbsp;
                                        </span>
                                        <span class = 'tweetTitleHighlight'>
                                            {item.action.topic}&nbsp;
                                        </span>

                                        <span>
                                            {item.action.forum != '' && (
                                                <>
                                                    <span>in the forum </span>
                                                    <span class = 'tweetTitleHighlight'>{item.action.forum}</span>
                                                </>
                                            )}
                                        </span>
                                        <br></br>
                                        <span class = 'tweetTitleDate'>{item.post_date}</span>
                                    </div>
                                    
                                </div>
                            </div>

                            {/* tweet's content */}
                            <div class = 'tweetContent'>
                                {item.content.text != '' && (<p class = 'tweetContentText'>{item.content.text}</p>)}
                                {item.content.link != '' && (<a class = 'tweetContentLink' href = {item.content.link} target = '_blank'><b>{item.content.link}</b></a>)}
                                {item.content.picture != '' && (<><br></br><br></br><img class = 'tweetContentImg' src = {item.content.picture}></img></>)}
                            </div>
                            <hr class = 'tweetSpace'/>

                            {/* tweet's footer */}
                            <div class = 'tweetFooter'>
                                <div>
                                    {/* TODO: click to add on / choose another emoji */}
                                    {item.emoji.type != [''] && (
                                        <span onClick={''}>{item.emoji.type[0]} {item.emoji.amount[0]}</span>
                                    )}
                                </div>
                                <div class = 'tweetFooterCommentContainer'>
                                    <span class = 'tweetFooterComments'>{item.comment.amount} Comments</span>
                                    <span>{item.share} Shares</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div id = 'rightContainer'>
                {/* newest Members */}
                <div id = 'popularGroupsContainer'>
                    <p id = 'popularGroupsTitle'><b>Popular Groups</b></p>

                    {popularGroupsList.map((item) => (
                        <div key={item.id} className = 'popularGroupsName'>
                            <div className = 'popularGroupsProfileContainer'>
                                <img src={item.profileImg} alt={'Image (item.id)'} className = 'popularGroupsProfile'></img>
                            </div>
                            <div class = 'popularGamesTextContainer'>
                                <p class = 'popularGroupsText'><b>{item.name}</b></p>
                                <p class = 'popularGroupsMembers'>{item.members}</p>
                            </div>
                            <div class = 'popularGroupsImg'>
                                <img src = {item.textImg} alt = 'img' className = 'popularGroupsTextImg'></img>
                            </div>
                        </div>
                    ))}
                </div>

                <div id = 'bodgesContainer'>
                    <p id = 'bodgesTitle'><b>Bodges</b></p>

                    {bodgesList.map((item) => (
                        <div key={item.id} className = 'bodgesName'>
                            <div className = 'bodgesProfileContainer'>
                                <img src={item.profileImg} alt={'Image (item.id)'} className = 'bodgesProfile'></img>
                            </div>
                            <div class = 'bodgesTextContainer'>
                                <p class = 'bodgesText'><b>{item.name}</b></p>
                                <p class = 'bodgesInfo'>{item.info}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
        
        
    )
}

function App(){
    return (
        <div>
            <Top />
            <Middle />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))