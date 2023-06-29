const PhyClinc = require("../models/phyiscalclinicModel");
const Factory = require("./handlerFactory");
const asyncHandler = require("express-async-handler");

/////////////////////////////////////////////////////

module.exports = {
  createClinc: asyncHandler(async (req, res, next) => {
    const { name, description, governorate, street } = req.body;
    const clinic = new PhyClinc({
      name,
      description,
      location: { governorate, street },
    });
    await clinic.save();
    res.status(200).json({ data: clinic });
  }),
  //@desc     create Clinc
  //route     POST /api/v1/Clincs
  //access    private

  getClincs: Factory.getAll(
    PhyClinc,
    "PhyClinc",
    "manager",
    "name email phone"
  ),
  //@desc     get list of Clinc
  //route     GET /api/v1/Clincs
  //access    public

  getClinc: Factory.getOnebyId(PhyClinc, "PhyClinc"),

  //@desc     get specific Clinc by id
  //route     GET /api/v1/Clincs/:id
  //access    public
  updateClinc: Factory.updateOnebyId(PhyClinc, "PhyClinc"),

  //@desc    update specific Clinc by id
  //route     PUT /api/v1/Clincs/:id
  //access    private

  deleteClinc: Factory.deleteOne(PhyClinc, "PhyClinc"),

  //@desc    delete specific product by id
  //route     DELETE /api/v1/products/:id
  //access    private

  addServices: asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const phyclinc = await PhyClinc.findById(id);
    if (!phyclinc) {
      return res.status(400).json({ message: "PhyClinc not found" });
    }
    phyclinc.services.push({ name, description, price });
    await phyclinc.save();
    res.status(200).json({ data: phyclinc });
  }),
  getServices: asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const clinic = await PhyClinc.findById(id);
    if (!clinic) {
      return res.status(400).json({ message: "PhyClinc not found" });
    }
    res.status(200).json({ data: clinic.services });
  }),
  deleteService: asyncHandler(async (req, res, next) => {
    const { clinicId, serviceId } = req.params;
    const clinic = await PhyClinc.findById(clinicId);
    if (!clinic) {
      return res.status(400).json({ message: "PhyClinc not found" });
    }
    const service = PhyClinc.services.id(serviceId);
    if (!service) {
      return res.status(400).json({ message: "service not found" });
    }
    service.remove();
    await clinic.save();
    res.status(200).json({ data: clinic });
  }),
  updateService: asyncHandler(async (req, res, next) => {
    const { clinicId, serviceId } = req.params;
    const clinic = await PhyClinc.findById(clinicId);
    if (!clinic) {
      return res.status(400).json({ message: "PhyClinc not found" });
    }
    const service = clinic.services.id(serviceId);
    if (!service) {
      return res.status(400).json({ message: "service not found" });
    }
    service.set(req.body);
    await clinic.save();
    res.status(200).json({ data: clinic });
  }),
  getService: asyncHandler(async (req, res, next) => {
    const { clinicId, serviceId } = req.params;
    const clinic = await PhyClinc.findById(clinicId);
    if (!clinic) {
      return res.status(400).json({ message: "PhyClinc not found" });
    }
    const service = clinic.services.id(serviceId);
    if (!service) {
      return res.status(400).json({ message: "service not found" });
    }
    res.status(200).json({ data: service });
  }),
  getClubMembers: asyncHandler(async (req, res, next) => {
    const { clinicId } = req.params;
    const clinic = await PhyClinc.findById(clinicId).populate({
      path: "services",
      populate: [
        { path: "subscribes", model: "User" },
        { path: "clinic", model: "Clinic" },
      ],
    });

    const members = [];

    clinic.services.forEach((offer) => {
      offer.subscribes.forEach((user) => {
        members.push({
          user,
          offer: {
            _id: offer._id,
            name: offer.name,
            description: offer.description,
            price: offer.price,
            isSpecial: offer.isSpecial,
          },
        });
      });
    });

    res.json(members);
  }),
  deleteMember: asyncHandler(async (req, res, next) => {
    const { clinicId, userId } = req.params;

    // Find the club by clubId
    const clinic = await PhyClinc.findById(clinicId);

    if (!clinic) {
      return res.status(404).json({ error: "clinic not found" });
    }

    // Find the offer that contains the userId in its subscribes array
    const offer = clinic.services.find((offer) =>
      offer.subscribes.includes(userId)
    );

    if (!offer) {
      return res.status(404).json({ error: "Member not found" });
    }

    // Remove the userId from the offer's subscribes array
    offer.subscribes = offer.subscribes.filter(
      (sub) => sub.toString() !== userId
    );

    // Save the updated club
    await clinic.save();

    res.json({ message: "Member deleted successfully" });
  }),
  updateMember: asyncHandler(async (req, res, next) => {
    const { clinicId, memberId } = req.params;
    const { updatedData } = req.body;

    // Find the club by clubId
    const club = await PhyClinc.findById(clinicId);

    if (!club) {
      return res.status(404).json({ error: "Clinic not found" });
    }

    // Find the offer that contains the userId in its subscribes array
    const offer = club.services.find((offer) =>
      offer.subscribes.includes(memberId)
    );

    if (!offer) {
      return res.status(404).json({ error: "Member not found" });
    }

    // Find the user within the offer's subscribes array
    const userIndex = offer.subscribes.findIndex(
      (sub) => sub.toString() === memberId
    );

    if (userIndex === -1) {
      return res.status(404).json({ error: "Member not found" });
    }

    // Update the member's data
    Object.assign(offer.subscribes[userIndex], updatedData);

    // Save the updated club
    await club.save();

    res.json({ message: "Member updated successfully" });
  }),
};
