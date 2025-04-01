# section 1 : get user U
1. container
    # row :
        i. left : user list
            header :
                icon to swho all user
                text : all user
                icon : mode
            
            body :
                rows of users such that, for each row
                    row = icon for user, user name,
            nb : there is a scroll for this box
        
        ii. right : generate user
            heder : text generate user
            body :
                there is a larg icone of unknown user,
                and in the barycenter of this icon there is an dice to show a process,
            footer : a button "generate"

# section 2 : user U generate challenge type CH
1. container
    card :
        header : generate challenge type
        body : object 3D like a dice 6 face
            in the last row there is a text
         in a footer there is a button

# section 3 : generate one action in the table CH

# section 4 : user U pass the game

# back end
GAME :
    users
    challenge = {truths, dares}
    curent_user
    curent_challenge

    # methods
        init() : loading data : users, challenges
        generate_users() : give the randome user who will play the challenge
        get_challenge_type() : from random of touth or dare
        generate_challenge()    : generate random challenge from the get_challenge_type()


MAIN :
G = GAME()
G.INIT()
USER = generate_users()
CHALLENGE_TYPE = get_challenge_type () // truths or dare
CURENT_CHALLENGE = generate_challenge()
USER_ACTION() // USER DO THE CHALLENGE RANDOM
