import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewService } from './review.service';

const getAllReviews = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ReviewService.getAllReviews(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews get successfully',
    data: result,
  });
});

export const ReviewController = { getAllReviews };
