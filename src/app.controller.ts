import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

interface Post {
    author: string;
    title: string;
    content: string;
    commentCount: number;
    likeCount: number;
}

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getPost(): Post {
        return {
            author: 'test2',
            title: 'test2',
            content: 'test2',
            commentCount: 1,
            likeCount: 1,
        };
    }
}
