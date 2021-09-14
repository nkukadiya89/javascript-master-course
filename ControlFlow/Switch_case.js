let role = moderator;

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'Moderator':
        console.log('moderator user');
        break;

    default:
        console.log('Unknown USer');
}

//A cleaner Way

if (role === 'guest') console.log("guest user");
else if (role === 'moderator') console.log('moderator user');
else console.log('Unknown User');