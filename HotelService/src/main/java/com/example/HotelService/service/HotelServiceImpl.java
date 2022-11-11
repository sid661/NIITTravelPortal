package com.example.HotelService.service;

import com.example.HotelService.config.Producer;
import com.example.HotelService.exception.HotelAlreadyExistsException;
import com.example.HotelService.exception.HotelNotFoundException;
import com.example.HotelService.exception.RoomNotFoundException;

import com.example.HotelService.model.Hotel;
import com.example.HotelService.model.Reservation;
import com.example.HotelService.model.Review;
import com.example.HotelService.model.Room;

import com.example.HotelService.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class HotelServiceImpl implements HotelService {
    @Autowired
    private Producer producer;
    private HotelRepository hotelRepository;

    @Autowired
    public HotelServiceImpl(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public Hotel registerHotel(Hotel hotel, String email) throws HotelAlreadyExistsException {
        if (hotelRepository.findById(hotel.getHotelName()).isPresent()) {
            throw new HotelAlreadyExistsException();
        } else {
            hotel.setEmail(email);
            hotelRepository.save(hotel);
            producer.sendMessageToRabbitMqServer(hotel);
            return hotel;
        }
    }

    @Override
    public Hotel registerHotelDetails(Hotel hotel, String email, byte[] overviewimage) throws HotelAlreadyExistsException {
        if (hotelRepository.findById(hotel.getHotelName()).isPresent()) {
            throw new HotelAlreadyExistsException();
        } else {

            if (hotel.getOverview() != null) {
                if (overviewimage.length != 0) {
                    System.out.println(overviewimage);
                    hotel.getOverview().setImage(overviewimage);
                }
            }

            hotel.setEmail(email);
            hotelRepository.save(hotel);
            producer.sendMessageToRabbitMqServer(hotel);
            return hotel;

        }


    }

    @Override
    public List<Hotel> getAllHotel() {
        return hotelRepository.findAll();
    }

    @Override
    public List<Hotel> getHotelsByEmail(String email) throws HotelNotFoundException {
        if (hotelRepository.findByEmail(email) == null) {
            throw new HotelNotFoundException();
        } else {
            return hotelRepository.findByEmail(email);
        }
    }

    @Override
    public Hotel deleteHotel(String hotelName) throws HotelNotFoundException {
        if (hotelRepository.findById(hotelName).isEmpty()) {
            System.out.println("Hotel not found");
            throw new HotelNotFoundException();
        } else {
            Hotel hotel = hotelRepository.findByHotelName(hotelName);
            hotelRepository.delete(hotel);
            return hotel;
        }

    }

    @Override
    public Hotel getHotelByHotelName(String hotelName) throws HotelNotFoundException {
        if (hotelRepository.findById(hotelName).isEmpty()) {
            System.out.println("Hotel not found");
            throw new HotelNotFoundException();
        } else {
            Hotel hotel = hotelRepository.findByHotelName(hotelName);
            return hotel;
        }
    }

    @Override
    public Hotel updateHotelDetails(String hotelName, String email, Hotel hotel) throws HotelNotFoundException {
        if (hotelRepository.findByEmail(email) == null) {
            System.out.println("Not found by mail");
            throw new HotelNotFoundException();
        } else if (hotelRepository.findById(hotelName).isEmpty()) {
            System.out.println("Hotel not found");
            throw new HotelNotFoundException();
        } else {
            Hotel hotel1 = hotelRepository.findByHotelName(hotelName);
            System.out.println(hotel1);
            if (hotel.getHotelName() != null && hotel1.getHotelName() != null) {
                System.out.println("iNSIDE 1");
                if (!hotel1.getHotelName().equals(hotel.getHotelName())) {

                    hotel1.setHotelName(hotel.getHotelName());
                    System.out.println("check1");

                }
            } else {
                System.out.println("new check 1");
            }
            if (hotel.getHotelCategory() != null && hotel1.getHotelCategory() != null) {
                System.out.println("iNSIDE 2");
                if (!hotel1.getHotelCategory().equals(hotel.getHotelCategory())) {
                    hotel1.setHotelCategory(hotel.getHotelCategory());
                    System.out.println(hotel1);
                    System.out.println("check2");
                }
            } else {
                System.out.println("new check 2");
            }
            if (hotel.getOverview() != null) {
                if (hotel.getOverview().getDescription() != null) {
                    System.out.println("iNSIDE 3");
                    if (!hotel1.getOverview().getDescription().equals(hotel.getOverview().getDescription())) {
                        hotel1.getOverview().setDescription(hotel.getOverview().getDescription());
                        System.out.println("check3");
                    }
                } else {
                    System.out.println("new check 3");
                }

                if (hotel.getOverview().getImage() != null) {
                    System.out.println("iNSIDE 4");
                    if (hotel1.getOverview().getImage() != hotel.getOverview().getImage()) {
                        hotel1.getOverview().setImage(hotel.getOverview().getImage());
                        System.out.println("check4");
                    }
                } else {
                    System.out.println("new check 4");
                }
            }
            if (hotel.getAmenities() != null) {
                if (hotel.getAmenities().getSafetyandhygiene() != null) {
                    System.out.println("iNSIDE 5");
                    if (!hotel1.getAmenities().getSafetyandhygiene().equals(hotel.getAmenities().getSafetyandhygiene())) {
                        hotel1.getAmenities().setSafetyandhygiene(hotel.getAmenities().getSafetyandhygiene());
                        System.out.println("check5");
                    }
                } else {
                    System.out.println("new check 5");
                }
                if (hotel.getAmenities().getBasicfacilities() != null) {
                    System.out.println("iNSIDE 6");
                    if (!hotel1.getAmenities().getBasicfacilities().equals(hotel.getAmenities().getBasicfacilities())) {
                        hotel1.getAmenities().setBasicfacilities(hotel.getAmenities().getBasicfacilities());
                        System.out.println("check6");
                    }
                } else {
                    System.out.println("new check 6");
                }
                if (hotel.getAmenities().getFamilyandkids() != null) {
                    System.out.println("iNSIDE 7");
                    if (!hotel1.getAmenities().getFamilyandkids().equals(hotel.getAmenities().getFamilyandkids())) {
                        hotel1.getAmenities().setFamilyandkids(hotel.getAmenities().getFamilyandkids());
                        System.out.println("check7");
                    }
                } else {
                    System.out.println("new check 7");
                }
                if (hotel.getAmenities().getFoodanddrinks() != null) {
                    System.out.println("iNSIDE 8");
                    if (!hotel1.getAmenities().getFoodanddrinks().equals(hotel.getAmenities().getFoodanddrinks())) {
                        hotel1.getAmenities().setFamilyandkids(hotel.getAmenities().getFamilyandkids());
                        System.out.println("check8");
                    }
                } else {
                    System.out.println("new check 8");
                }
            }
            if (hotel.getAddress() != null) {
                if (hotel.getAddress().getStreetname() != null) {
                    System.out.println("iNSIDE 9");
                    if (!hotel1.getAddress().getStreetname().equals(hotel.getAddress().getStreetname())) {
                        hotel1.getAddress().setStreetname(hotel.getAddress().getStreetname());
                        System.out.println("check9");
                    }
                } else {
                    System.out.println("new check 9");
                }
                if (hotel.getAddress().getLandmark() != null) {
                    System.out.println("iNSIDE 10");
                    if (!hotel1.getAddress().getLandmark().equals(hotel.getAddress().getLandmark())) {
                        hotel1.getAddress().setLandmark(hotel.getAddress().getLandmark());
                        System.out.println("check10");
                    }
                } else {
                    System.out.println("new check 10");
                }
                if (hotel.getAddress().getCity() != null) {
                    System.out.println("iNSIDE 11");
                    if (!(hotel1.getAddress().getCity().equals(hotel.getAddress().getCity()))) {
                        hotel1.getAddress().setCity(hotel.getAddress().getCity());
                        System.out.println("check11");
                    }
                } else {
                    System.out.println("new check 11");
                }
                if (hotel.getAddress().getState() != null) {
                    System.out.println("iNSIDE 12");
                    if (!hotel1.getAddress().getState().equals(hotel.getAddress().getState())) {
                        hotel1.getAddress().setState(hotel.getAddress().getState());
                        System.out.println("check12");
                    }
                } else {
                    System.out.println("new check 12");
                }
            }
            if (hotel.getPropertyRules() != null) {
                System.out.println("iNSIDE 13");
                System.out.println("check13");
                hotel1.setPropertyRules(hotel.getPropertyRules());
            } else {
                System.out.println("new check 13");
            }
            if (hotel.getEmail() != null) {
                System.out.println("iNSIDE 14");
                System.out.println("check14");
                hotel1.setEmail(hotel.getEmail());
            } else {
                System.out.println("new check 14");
            }
            if (hotel.getRoom() != null) {
                System.out.println("iNSIDE 15");
                System.out.println("check15");
                hotel1.setRoom(hotel.getRoom());
            } else {
                System.out.println("new check 15");
            }
            if (hotel.getReview() != null) {
                System.out.println("iNSIDE 16");
                System.out.println("check16");
                hotel1.setReview(hotel.getReview());
            } else {
                System.out.println("new check 16");
            }


            System.out.println("check18");
            System.out.println(hotel1);
            System.out.println("check19");
            hotelRepository.save(hotel1);
            System.out.println("check20");
            return hotel1;
        }


    }

    @Override
    public Hotel addReview(String hotelName, Review review) throws HotelNotFoundException {
        if (hotelRepository.findById(hotelName).isEmpty()) {
            System.out.println("Hotel not found");
            throw new HotelNotFoundException();
        } else {
            Hotel hotel = hotelRepository.findByHotelName(hotelName);
            if (hotel.getReview() == null) {
                hotel.setReview(Arrays.asList(review));
            } else {
                List<Review> reviews = hotel.getReview();
                reviews.add(review);
                hotel.setReview(reviews);
            }
            return hotelRepository.save(hotel);
        }

    }

    @Override
    public Hotel updateExistingHotel(Hotel hotel, String hotelName) throws HotelNotFoundException {
        if (hotelRepository.findById(hotel.getHotelName()).isEmpty()) {
            throw new HotelNotFoundException();
        } else {
            hotelRepository.save(hotel);
            producer.sendMessageToRabbitMqServer(hotel);
            return hotel;
        }
    }

    @Override
    public Hotel addRoom(String hotelName, Room room, byte[] roomimage) throws HotelNotFoundException {
        if (hotelRepository.findById(hotelName).isEmpty()) {
            System.out.println("Hotel not found");
            throw new HotelNotFoundException();
        } else {
            Hotel hotel = hotelRepository.findByHotelName(hotelName);
            room.setImages(roomimage);
            if (hotel.getRoom() == null) {

                hotel.setRoom(Arrays.asList(room));
            } else {
                List<Room> rooms = hotel.getRoom();

                rooms.add(room);
                hotel.setRoom(rooms);
            }
            return hotelRepository.save(hotel);
        }
    }

    @Override
    public List<Hotel> getHotelByCityName(String city)  {
        return hotelRepository.findByAddressCity(city);

    }

    @Override
    public List<Hotel> findByAddressCity(String cityName) {


        return hotelRepository.findByAddressCity(cityName);
    }


    @Override
    public List<Hotel> findByReviewRating(int rating) {
        List<Hotel> hotels = new ArrayList<>();
        List<Hotel> listedHotel = hotelRepository.findAll();
        for (Hotel hotel : listedHotel) {
            for (Review review : hotel.getReview()) {
                if (review.getRating() == rating) {
                    hotels.add(hotel);
                }
            }
        }
        return hotels;
    }

    @Override
    public List<Hotel> findByRoomPrice(int price) {
        return hotelRepository.findByRoomPrice(price);
    }

    @Override
    public List<Hotel> findByHotelCategoryAndRoomPriceAndReviewRating(String category, int price, int rating) {
        return hotelRepository.findByHotelCategoryAndRoomPriceAndReviewRating(category, price, rating);
    }

    @Override
    public List<Hotel> findByRoomPriceAndReviewRating(int price, int rating) {
        return null;
    }

    @Override
    public List<Hotel> findByHotelCategoryAndReviewRating(String category, int rating) {
        return null;
    }

    @Override
    public List<Hotel> findByHotelCategoryAndRoomPrice(String category, int price) {
        return null;
    }

    @Override

    public Room makeReservation(String hotelName, int roomid, Reservation reservation) throws HotelNotFoundException, RoomNotFoundException {
        {

            if (hotelRepository.findById(hotelName).isEmpty()) {
                System.out.println("Hotel not found");
                throw new HotelNotFoundException();
            } else {
                Hotel hotel = hotelRepository.findByHotelName(hotelName);
                List<Room> rooms = hotel.getRoom();
                boolean flag = false;
                Room room1 = new Room();
                for (Room room : rooms) {
                    if (room.getRoomid() == roomid) {
                        flag = true;
                        room1 = room;
                        break;
                    }
                }
                if (flag) {
                    System.out.println(room1);
                    room1.setReservation(reservation);
                    hotelRepository.save(hotel);
                    return room1;


                } else {
                    throw new RoomNotFoundException();
                }

            }

        }


    }

    @Override
    public List<Room> getAllRooms(String hotelName) throws HotelNotFoundException {
        if(hotelRepository.findById(hotelName).isEmpty())
        {
            System.out.println("Hotel not found");
            throw new HotelNotFoundException();
        }
        else
        {
            Hotel hotel = hotelRepository.findByHotelName(hotelName);
            return  hotel.getRoom();
        }
    }

}
