import Joi  from 'joi' ;

const id = Joi.number().integer()
const name = Joi.string()
const coachId = Joi.number().integer()


export const createClubSchema = Joi.object({
  name: name.required(),
  coachId: coachId.required()
})

export const getClubSchema = Joi.object({
  id: id.required
})
