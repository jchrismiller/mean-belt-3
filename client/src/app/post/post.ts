import { Answer } from './answer'
import { User } from '../user/user'

export class Post {
	_id: string;
	title: string;
	description: string;
	date: string;
	time: string;
	tagged_user: string;
	_user: User;
	createdAt: Date;
	updatedAt: Date;
	answers: Answer[] = [];
}
